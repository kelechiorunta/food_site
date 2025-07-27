import React, { createContext, useEffect, useContext, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

// Create context
const ViewContext = createContext(null);

// Provider component
export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [viewState, setViewState] = useState({});

  const updateViewState = useCallback((id: any, inView: boolean) => {
    setViewState((prev) => ({ ...prev, [id]: inView }));
  }, []);

  const value: any = { viewState, updateViewState };

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
}

// Custom hook to use ViewContext
export function useViewChild(id: any, delay: number) {
  const { viewState, updateViewState } = useContext<any>(ViewContext);
  const { ref, inView } = useInView({
    threshold: [0],
    triggerOnce: false,
    // initialInView
    rootMargin: '0px',
    root: null,
    delay: delay || 500
    // onChange:(inView, entry) => {
    //   // alert(entry.target.id)
    // },
  });

  useEffect(() => {
    updateViewState(id, inView);
  }, [id, inView, updateViewState]);

  return { ref, inView, isVisible: viewState[id] || false };
}

// Example component using the hook
export function ViewChild({
  id,
  children,
  animateStyle,
  index,
  delay
}: {
  id?: any;
  children?: any;
  animateStyle?: any;
  index?: any;
  delay?: any;
}) {
  const { ref, isVisible } = useViewChild(id, delay);

  const dynamicStyle = {
    // zIndex: -999,
    opacity: isVisible ? '1' : '0',
    transform: isVisible ? 'translateY(0px)' : 'translateY(200px)',
    transition: `opacity ${1 * index}s ease, transform ${1 * index}s ease`,
    ...animateStyle // Allow overriding or extending styles
  };

  return (
    <div ref={ref} style={dynamicStyle}>
      {console.log(`Component ${id} is in view: ${isVisible}`)}
      {children}
    </div>
  );
}
