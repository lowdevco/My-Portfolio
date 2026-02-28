import React from 'react'

function ProfileCard() {
  return (
    <>
      <div className='profile-card bg-blue-500 rounded-2xl p-15 flex items-center justify-center '>
        <div className='profile-content display flex flex-col items-center justify-center h-full'>
          <h4 className='text-white text-1xl font-semibold'>
            const Developer = &#123; <br />
            <br />
            name: "Muhammad Irfan", <br />
            role: "Full Stack Developer", <br />
            skills: ["Python", "React", "javaScript"], <br />
            passionate: true, <br />
            {/* experience: "3 years in web development" <br /> */}
            // add one more key value pair
            <br />
            &#125;
            <br />
            <br />
            Developer.showcase( ); <br />
          </h4>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
