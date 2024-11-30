import React from "react";
import {
    ArrowRight,
    BarChart,
    Book,
    Home,
    Plus,
    Target,
    Trophy,
} from "lucide-react";

const Main = () => {
    const features = [
        {
            id: 1,
            title: "Investment Journey",
            description: "Start your personalized investment journey",
            icon: <Target className="w-8 h-8" />,
            category: "investment",
            stats: { users: "2.5k", growth: "+15%" },
            bgGradient: "from-violet-500 to-purple-500",
            tools: ["Portfolio Tracker", "Risk Analysis", "Market Insights"]
        },
        {
            id: 2,
            title: "Property Planning",
            description: "Calculate and plan your property investments",
            icon: <Home className="w-8 h-8" />,
            category: "property",
            stats: { users: "1.8k", growth: "+22%" },
            bgGradient: "from-blue-500 to-cyan-500",
            tools: ["Mortgage Calculator", "Property Comparison", "Market Trends"]
        },
        {
            id: 3,
            title: "Financial Goals",
            description: "Set and track your financial milestones",
            icon: <Trophy className="w-8 h-8" />,
            category: "goals",
            stats: { users: "3.2k", growth: "+18%" },
            bgGradient: "from-orange-500 to-red-500",
            tools: ["Goal Tracker", "Savings Calculator", "Progress Reports"]
        },
        {
            id: 4,
            title: "Education Fund",
            description: "Plan your educational investments",
            icon: <Book className="w-8 h-8" />,
            category: "education",
            stats: { users: "2.1k", growth: "+12%" },
            bgGradient: "from-green-500 to-emerald-500",
            tools: ["Education Calculator", "School Comparison", "Savings Plans"]
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features
                    .map((feature) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="group relative">
                            <div
                                key={feature.id}
                                className={`
                                p-8 rounded-2xl bg-gradient-to-br ${feature.bgGradient}
                                transform transition-all duration-500
                                hover:scale-[1.02] hover:shadow-2xl
                                text-white relative overflow-hidden
                                `}
                            >
                                {/* Animated Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0 bg-grid-white/10"
                                         style={{
                                             backgroundSize: "30px 30px",
                                             animation: "moveGrid 20s linear infinite"
                                         }}
                                    />
                                </div>

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">{feature.title}</h3>
                                                <p className="text-white/80">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tools Grid */}
                                    <div className="grid grid-cols-1 gap-4">
                                        {feature.tools.map((tool, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm
                                   transform transition-all duration-300 hover:translate-x-2
                                   cursor-pointer group/tool"
                                            >
                                                <Plus className="w-5 h-5 mr-3 transform group-hover/tool:rotate-180 transition-transform duration-300" />
                                                <span className="font-medium">{tool}</span>
                                                <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover/tool:opacity-100 transform group-hover/tool:translate-x-1 transition-all duration-300" />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stats Footer */}
                                    <div className="mt-6 flex items-center justify-between text-white/80">
                                        <div className="flex items-center space-x-2">
                                            <BarChart className="w-4 h-4" />
                                            <span>{feature.stats.users} Active Users</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Main;