function TopicList({ topics, onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl mr-6 flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                <span className="text-white text-2xl">📋</span>
              </div>
              <div>
                <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  トピック一覧
                </h1>
                <p className="text-white/70 text-lg font-medium">全{topics.length}個の会話スターター</p>
              </div>
            </div>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl flex items-center"
            >
              <span className="mr-3 text-xl">←</span>
              戻る
            </button>
          </div>
        </div>
        
        {/* Topics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-base leading-relaxed font-medium group-hover:text-white/90 transition-colors duration-200">
                      {topic}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl shadow-xl">
            <span className="text-3xl mr-4">✨</span>
            <p className="text-white font-bold text-lg">
              全{topics.length}個のトピックをご用意しました
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-white/20 text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>💬</div>
      <div className="absolute top-40 right-20 text-white/20 text-2xl animate-bounce" style={{animationDelay: '1.5s'}}>🎯</div>
      <div className="absolute bottom-40 left-16 text-white/20 text-3xl animate-bounce" style={{animationDelay: '2.5s'}}>🌟</div>
      <div className="absolute bottom-20 right-32 text-white/20 text-2xl animate-bounce" style={{animationDelay: '3.5s'}}>💡</div>
    </div>
  )
}

export default TopicList