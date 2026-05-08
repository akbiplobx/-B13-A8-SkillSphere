import React from 'react';

const LearningTips = () => {
  const tips = [
    {
      id: 1,
      title: "Active Recall",
      desc: "Practice retrieving information from memory by testing yourself instead of just re-reading. It significantly boosts long-term retention.",
      icon: "🧠"
    },
    {
      id: 2,
      title: "Pomodoro Technique",
      desc: "Break your study sessions into 25-minute intervals followed by a 5-minute break. This keeps your brain fresh and highly focused.",
      icon: "⏰"
    },
    {
      id: 3,
      title: "Spaced Repetition",
      desc: "Review your lessons at increasing intervals over time. This technique helps move knowledge into your permanent memory.",
      icon: "📅"
    }
  ];

  return (
    <section className="py-20 bg-white px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Master Your <span className="text-green-600">Learning</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            "Unlock your full potential with these science-backed study techniques designed for modern learners."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div 
              key={tip.id} 
              className="p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-green-100"
            >
              <div className="text-5xl mb-6 group-hover:bounce transition-transform duration-300">
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{tip.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;