
export default function Navbar() {
  return (
    <div className='flex justify-between items-center p-4 border'>
          <div className="p-1">
             <h1 className='text-4xl font-semibold text-purple-800'>PEOPLE.CO</h1>
          </div>
          <div className='flex items-center gap-3'>
              <img src="./src/assets/bell.svg" alt="notifications" />
              <img src="./src/assets/profile.svg" alt="profile" />
              <span className='text-2xl font-light'>Jane Deo</span>
          </div>
    </div>
  )
}
