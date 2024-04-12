

function Score({ totalScore }) {
  return (
    <div className="bg-white rounded-lg flex flex-col py-3 px-6 lg:px-12 w-fit justify-center text-center">
      <p className="text-ScoreText font-semibold tracking-widest">SCORE</p>
      <p className='text-5xl lg:text-6xl font-bold text-DarkText'>{totalScore}</p>
    </div>
  )
}

export default Score