const ShowReview = () => {
    const reviews = [
        { 
          id : 1,
          name: "Sophia", 
          description:"Great service and Customer care! Thank you!",
          rating:5 
        },
        { 
          id : 2,
          name: "Sophia", 
          description:"Great service and Customer care! Thank you!",
          rating:5 
        },
        { 
          id : 3,
          name: "Sophia", 
          description:"Great service and Customer care! Thank you!",
          rating:5 
        },
        { 
          id : 4,
          name: "Sophia", 
          description:"Great service and Customer care! Thank you!",
          rating:5 
        },
        { 
          id : 5,
          name: "Sophia", 
          description:"Great service and Customer care! Thank you!",
          rating:5 
        },
    ];
    return (
        <div className="flex flex-col w-full h-screen bg-white justify-center items-center gap-8 p-6 overflow-y-auto" id="review">
        {/* Section Title with Border */}
        <div className="relative flex items-center justify-center w-full">
            <h1 className="text-dark text-center font-semibold text-3xl px-4 z-10">
                What Our Customer Says
            </h1>
        </div>
        {/* Horizontal Line */}
        <div className="top-1/2 w-full h-[2px] bg-dark"></div>
        {/* Cards Section */}
        <div className="flex flex-wrap justify-center items-center gap-6">
            </div>
        </div>
    )
}

export default ShowReview;