export default function Article()
{
    return(
        <div class="container my-24 px-6 mx-auto">
        
          <section class="mb-32 text-center text-gray-800">
            <div class="max-w-[700px] mx-auto px-3 lg:px-6">
              <h2 class="text-3xl font-bold mb-12">add your work of art</h2>
              <form>
                <div class="form-group mb-6">
                  <input type="text" class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="Name"
                    placeholder="Name"/>
                </div>
                <div class="form-group mb-6">
                  <input type="email" class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="Theme"
                    placeholder="theme"/>
                </div>
                <div class="form-group mb-6">
                  <textarea class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                </div>
                <br>
                </br>
                <button type="submit" class="
                  w-full
                  px-6
                  py-2.5
                  bg-blue-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-blue-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out">Send</button>
              </form>
            </div>
          </section>
        
        </div>
    );
}