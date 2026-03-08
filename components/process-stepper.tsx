"use client";

import Link from "next/link";
import React, { Children, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type StepperProps = {
  children: React.ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  backButtonText?: string;
  nextButtonText?: string;
  completeButtonText?: string;
  completedTitle?: string;
  completedText?: string;
  completedActionText?: string;
  completedActionHref?: string;
  disableStepIndicators?: boolean;
  className?: string;
};

type SlideTransitionProps = {
  children: React.ReactNode;
  direction: number;
  onHeightReady: (height: number) => void;
};

export function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {
    // no-op
  },
  onFinalStepCompleted = () => {
    // no-op
  },
  backButtonText = "Back",
  nextButtonText = "Continue",
  completeButtonText = "Complete",
  completedTitle = "Completed",
  completedText = "You are all set.",
  completedActionText = "Start project",
  completedActionHref,
  disableStepIndicators = false,
  className = ""
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);

  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;

  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep: number) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  const handleReset = () => {
    setDirection(-1);
    updateStep(1);
  };

  return (
    <div className={`hp-stepper ${className}`}>
      <div className="hp-stepper-shell">
        <div className="hp-stepper-indicators">
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;

            return (
              <React.Fragment key={stepNumber}>
                <StepIndicator
                  step={stepNumber}
                  currentStep={currentStep}
                  disableStepIndicators={disableStepIndicators}
                  onClickStep={(clicked) => {
                    setDirection(clicked > currentStep ? 1 : -1);
                    updateStep(clicked);
                  }}
                />
                {isNotLastStep && <StepConnector isComplete={currentStep > stepNumber} />}
              </React.Fragment>
            );
          })}
        </div>

        {isCompleted ? (
          <motion.div
            className="hp-stepper-completed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <h3>{completedTitle}</h3>
            <p>{completedText}</p>
            {completedActionHref ? (
              <Link className="hp-stepper-primary hp-stepper-primary-link" href={completedActionHref}>
                {completedActionText}
              </Link>
            ) : (
              <button type="button" className="hp-stepper-primary" onClick={handleReset}>
                {completedActionText}
              </button>
            )}
          </motion.div>
        ) : (
          <>
            <StepContentWrapper isCompleted={isCompleted} currentStep={currentStep} direction={direction}>
              {stepsArray[currentStep - 1]}
            </StepContentWrapper>

            <div className="hp-stepper-footer">
              <div className={`hp-stepper-actions ${currentStep !== 1 ? "is-between" : "is-end"}`}>
                {currentStep !== 1 ? (
                  <button type="button" onClick={handleBack} className="hp-stepper-back">
                    {backButtonText}
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={isLastStep ? handleComplete : handleNext}
                  className="hp-stepper-primary"
                >
                  {isLastStep ? completeButtonText : nextButtonText}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

type StepContentWrapperProps = {
  isCompleted: boolean;
  currentStep: number;
  direction: number;
  children: React.ReactNode;
};

function StepContentWrapper({ isCompleted, currentStep, direction, children }: StepContentWrapperProps) {
  const [parentHeight, setParentHeight] = useState(0);

  return (
    <motion.div
      style={{ position: "relative", overflow: "hidden" }}
      animate={{ height: isCompleted ? 0 : parentHeight }}
      transition={{ type: "spring", duration: 0.42 }}
      className="hp-stepper-content"
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted ? (
          <SlideTransition key={currentStep} direction={direction} onHeightReady={(height) => setParentHeight(height)}>
            {children}
          </SlideTransition>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

function SlideTransition({ children, direction, onHeightReady }: SlideTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      onHeightReady(containerRef.current.offsetHeight);
    }
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35 }}
      style={{ position: "absolute", left: 0, right: 0, top: 0 }}
      className="hp-stepper-slide"
    >
      {children}
    </motion.div>
  );
}

const stepVariants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? "-100%" : "100%",
    opacity: 0
  }),
  center: {
    x: "0%",
    opacity: 1
  },
  exit: (dir: number) => ({
    x: dir >= 0 ? "50%" : "-50%",
    opacity: 0
  })
};

type StepProps = {
  children: React.ReactNode;
};

export function Step({ children }: StepProps) {
  return <div className="hp-stepper-step">{children}</div>;
}

type StepIndicatorProps = {
  step: number;
  currentStep: number;
  disableStepIndicators: boolean;
  onClickStep: (step: number) => void;
};

function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators }: StepIndicatorProps) {
  const status = currentStep === step ? "active" : currentStep < step ? "inactive" : "complete";

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) {
      onClickStep(step);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className={`hp-stepper-indicator ${disableStepIndicators ? "is-disabled" : ""}`}
      animate={status}
      initial={false}
      aria-label={`Step ${step}`}
    >
      <motion.span
        variants={{
          inactive: { scale: 1, backgroundColor: "#1f2231", color: "#a3adc7" },
          active: { scale: 1, backgroundColor: "#7d5cff", color: "#0b0618" },
          complete: { scale: 1, backgroundColor: "#71d7ff", color: "#0b0618" }
        }}
        transition={{ duration: 0.28 }}
        className="hp-stepper-indicator-core"
      >
        {status === "complete" ? <CheckIcon className="hp-stepper-check" /> : status === "active" ? <span className="hp-stepper-dot" /> : <span>{step}</span>}
      </motion.span>
    </motion.button>
  );
}

type StepConnectorProps = {
  isComplete: boolean;
};

function StepConnector({ isComplete }: StepConnectorProps) {
  const lineVariants = {
    incomplete: { width: 0, backgroundColor: "transparent" },
    complete: { width: "100%", backgroundColor: "#7d5cff" }
  };

  return (
    <div className="hp-stepper-connector">
      <motion.div
        className="hp-stepper-connector-fill"
        variants={lineVariants}
        initial={false}
        animate={isComplete ? "complete" : "incomplete"}
        transition={{ duration: 0.32 }}
      />
    </div>
  );
}

type CheckIconProps = {
  className?: string;
};

function CheckIcon({ className }: CheckIconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.08, type: "tween", ease: "easeOut", duration: 0.28 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
