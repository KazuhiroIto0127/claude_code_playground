import { useState } from 'react'

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null)

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          雑談トピックジェネレーター
        </h1>
        
        <div className="mb-8">
          {selectedTopic ? (
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg">
              <p className="text-lg font-medium">{selectedTopic}</p>
            </div>
          ) : (
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-500">ボタンを押して話題を選んでください</p>
            </div>
          )}
        </div>
        
        <button
          onClick={getRandomTopic}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
        >
          話題を選ぶ
        </button>
      </div>
    </div>
  )
}

export default App
