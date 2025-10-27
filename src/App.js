const App = () => {
  const surpriseOptions = [
    'A blue ostrich eating melon',
    'A matisse style shark on the telephone',
    'A pineapple sunbathing on an island'
  ]

  return (
    <div className="app">
      <section class="search-section">
        <p>Start with a detailed description 
          <span className="surprise">Surprise me</span>
        </p>
        <div className="input-container">
          <input 
            placeholder="An impressionist oil painting of a sunflower in a purple vase..."
          />
          <button>Generate</button>
        </div>
      </section>
      <section class="image-section"></section>
    </div>
  )
}

export default App
