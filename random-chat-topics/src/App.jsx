import { useState } from 'react'
import TopicList from './TopicList'

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [showTopicList, setShowTopicList] = useState(false)

  const topics = [
    "今日の天気はどうですか？",
    "最近見た映画について教えてください",
    "好きな食べ物は何ですか？",
    "休日はどのように過ごしますか？",
    "子供の頃の思い出を教えてください",
    "今一番欲しいものは何ですか？",
    "最近始めた新しい習慣はありますか？",
    "お気に入りの音楽やアーティストはいますか？",
    "今年の目標は何ですか？",
    "ストレス解消法はありますか？",
    "好きな季節とその理由を教えてください",
    "最近読んだ本でおすすめはありますか？",
    "理想の旅行先はどこですか？",
    "もし宝くじが当たったらどうしますか？",
    "最近感動したことはありますか？",
    "好きなスポーツや運動はありますか？",
    "子供の頃の夢は何でしたか？",
    "最近のマイブームは何ですか？",
    "お気に入りのテレビ番組やドラマはありますか？",
    "今までで一番印象に残っている出来事は？",
    "好きな動物は何ですか？",
    "料理は得意ですか？好きな料理は？",
    "最近笑ったことはありますか？",
    "もし一日だけ透明人間になれたらどうしますか？",
    "好きな色とその理由を教えてください",
    "最近新しく学んだことはありますか？",
    "お気に入りの場所はどこですか？",
    "もし時間を止められたらどうしますか？",
    "最近変わったことはありますか？",
    "好きな言葉やモットーはありますか？",
    "最近困ったことはありますか？",
    "もし魔法が使えたらどうしますか？",
    "好きな花は何ですか？",
    "最近うれしかったことは何ですか？",
    "もし一つだけ願いが叶うとしたら？",
    "好きな香りはありますか？",
    "最近驚いたことはありますか？",
    "もし動物と話せたらどの動物と話したいですか？",
    "好きなお菓子やデザートは何ですか？",
    "最近頑張っていることはありますか？",
    "もし過去に戻れるとしたらいつに戻りたいですか？",
    "好きな時間帯はいつですか？",
    "最近発見した新しいお店はありますか？",
    "もし一週間休みがあったらどうしますか？",
    "好きな匂いは何ですか？",
    "最近印象に残った言葉はありますか？",
    "もし空を飛べたらどこに行きたいですか？",
    "好きな手作り料理はありますか？",
    "最近心に残った景色はありますか？",
    "もし一日だけ有名人になれたら誰になりたいですか？"
  ]

  const getRandomTopic = () => {
    const randomIndex = Math.floor(Math.random() * topics.length)
    setSelectedTopic(topics[randomIndex])
  }

  if (showTopicList) {
    return (
      <TopicList 
        topics={topics} 
        onBack={() => setShowTopicList(false)} 
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-2xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl transform hover:rotate-6 transition-transform duration-300">
              <span className="text-white text-3xl">💭</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
          <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight">
            雑談トピック
          </h1>
          <h2 className="text-3xl font-bold text-white/90 mb-4">
            ジェネレーター
          </h2>
          <p className="text-white/70 text-lg">会話のきっかけを見つけよう</p>
        </div>
        
        {/* Topic display */}
        <div className="mb-10">
          {selectedTopic ? (
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold text-sm uppercase tracking-widest">
                    ✨ Today's Topic ✨
                  </div>
                </div>
                <p className="text-white text-xl font-medium leading-relaxed text-center">{selectedTopic}</p>
              </div>
            </div>
          ) : (
            <div className="bg-white/5 backdrop-blur-xl border-2 border-dashed border-white/30 p-12 rounded-3xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-8xl mb-6 animate-bounce">🎲</div>
              <p className="text-white/80 text-xl font-medium">ボタンを押して話題を選んでください</p>
            </div>
          )}
        </div>
        
        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={getRandomTopic}
            className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white font-bold py-6 px-8 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative z-10 flex items-center justify-center text-xl">
              <span className="mr-3 text-2xl">🎯</span>
              話題を選ぶ
            </span>
          </button>
          
          <button
            onClick={() => setShowTopicList(true)}
            className="w-full bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="flex items-center justify-center text-lg">
              <span className="mr-3 text-xl">📋</span>
              トピック一覧を見る
            </span>
          </button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 text-white/20 text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>💡</div>
      <div className="absolute top-20 right-20 text-white/20 text-3xl animate-bounce" style={{animationDelay: '1.5s'}}>🗣️</div>
      <div className="absolute bottom-20 left-20 text-white/20 text-3xl animate-bounce" style={{animationDelay: '2.5s'}}>🎉</div>
    </div>
  )
}

export default App
