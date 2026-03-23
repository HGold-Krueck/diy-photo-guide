import React, { useState } from 'react';
import { 
  Camera, 
  BatteryFull, 
  Trash2, 
  Smartphone, 
  Plane, 
  Maximize, 
  Focus, 
  Moon, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Aperture,
  SprayCan as Spray
} from 'lucide-react';

const steps = [
  {
    title: "The Basics",
    description: "Physical prep is the foundation of a great shot.",
    items: [
      {
        icon: <Spray className="text-blue-500" />,
        label: "Wipe your lens",
        detail: "Use a soft cloth to remove smudges for clear, crisp images."
      },
      {
        icon: <BatteryFull className="text-green-500" />,
        label: "Charge to 100%",
        detail: "Avoid your phone dying mid-shoot."
      }
    ]
  },
  {
    title: "System Ready",
    description: "Make sure your phone is optimized for large files.",
    items: [
      {
        icon: <Trash2 className="text-red-500" />,
        label: "Clear Space",
        detail: "Delete unnecessary files. High-res photos need room!"
      },
      {
        icon: <Plane className="text-orange-500" />,
        label: "Airplane Mode",
        detail: "Crucial for video! Prevents calls and notifications from ruining the take."
      }
    ]
  },
  {
    title: "Camera Settings",
    description: "Configuring the digital 'film' for compatibility.",
    items: [
      {
        icon: <Maximize className="text-purple-500" />,
        label: "Max Resolution",
        detail: "In settings, choose the largest file size or resolution available."
      },
      {
        icon: <Smartphone className="text-indigo-500" />,
        label: "Choose JPEG",
        detail: "Avoid HEIC/HEIF. JPEG works everywhere and is easier to share."
      }
    ]
  },
  {
    title: "Taking the Shot",
    description: "Simple techniques for professional results.",
    items: [
      {
        icon: <Aperture className="text-pink-500" />,
        label: "Portrait Mode",
        detail: "Great for 1-3 people. It blurs the background for a pro look."
      },
      {
        icon: <Focus className="text-yellow-500" />,
        label: "Tap to Focus",
        detail: "Don't just point. Tap your subject's face on the screen to lock focus."
      }
    ]
  },
  {
    title: "Lighting Fixes",
    description: "Adjusting for your environment.",
    items: [
      {
        icon: <Moon className="text-slate-700" />,
        label: "Night Mode",
        detail: "If it's dim, use Night Sight. Keep the phone steady while it captures."
      },
      {
        icon: <CheckCircle2 className="text-emerald-500" />,
        label: "Do a Test Shot",
        detail: "Review your first photo. Check lighting and background before the 'real' one."
      }
    ]
  }
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (completed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 font-sans">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center max-w-sm w-full border border-slate-100">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">You're Ready!</h1>
          <p className="text-slate-600 mb-8">
            Your phone is prepped and your settings are optimized. Go capture something great.
          </p>
          <button 
            onClick={() => {setCompleted(false); setCurrentStep(0);}}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-semibold shadow-lg hover:bg-slate-800 transition-colors"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Header & Progress */}
      <div className="bg-white px-6 pt-12 pb-6 border-b border-slate-100 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 p-2 rounded-lg">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-slate-900">DIY Pro Photo</span>
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-slate-900 transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 p-6 max-w-lg mx-auto w-full">
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2 leading-tight">
            {step.title}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            {step.description}
          </p>
        </div>

        <div className="space-y-4">
          {step.items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-4 animate-in fade-in slide-in-from-right-4 duration-500"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100/50">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{item.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip Box */}
        {currentStep === 1 && (
          <div className="mt-8 bg-orange-50 border border-orange-100 p-4 rounded-2xl flex gap-3 items-start">
            <div className="bg-orange-100 p-1 rounded-md mt-0.5">
              <Plane className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-orange-800 uppercase tracking-wide mb-1">Pro Tip</p>
              <p className="text-sm text-orange-700">Don't forget a tripod! Stability is the difference between a amateur and pro shot.</p>
            </div>
          </div>
        )}
      </main>

      {/* Navigation Footer */}
      <footer className="p-6 bg-white border-t border-slate-100 sticky bottom-0 flex gap-4">
        {currentStep > 0 && (
          <button 
            onClick={prevStep}
            className="w-16 h-14 flex items-center justify-center border-2 border-slate-100 rounded-2xl text-slate-400 hover:border-slate-200 transition-colors"
          >
            <ChevronLeft />
          </button>
        )}
        <button 
          onClick={nextStep}
          className="flex-1 h-14 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-slate-800 transition-transform active:scale-95"
        >
          {currentStep === steps.length - 1 ? "Finish Setup" : "Continue"}
          <ChevronRight className="w-5 h-5" />
        </button>
      </footer>
    </div>
  );
};

export default App;
