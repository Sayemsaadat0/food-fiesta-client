const Feedback = () => {
  return (
    <div className="container p-5 lg:p-0">

      {/* Section Heading */}
      <div className="lg:flex justify-between gap-10 ">
        <div className="space-y-5">
          <h4 className="text-3xl font-bold">Customer Review</h4>
          <div className="text-gray-500 space-y-5">
          <p>Our client`s satisfaction is at the heart of our work. Here`s what some of them have to say about their experience with our services. We take pride in delivering high-quality, user-friendly websites and exceptional online meeting experiences.</p>
          {/* <br /><br /> */}
          <p>These reviews reflect our commitment to excellence in both web design and video conferencing solutions.</p>
          </div>
        </div>
        {/* Star Based Review */}
        <div className="max-w-[600px] w-full">
          <p>Based on 2304 reviews</p>

        </div>
      </div>
    </div>
  )
}

export default Feedback