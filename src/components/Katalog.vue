<template>
    <section class="container mx-auto py-5 shadow-sm relative pb-10">
        <div class="w-full flex flex-col md:flex-row justify-between gap-7 relative">
          <div
            class=" w-full md:w-1/2 h-32 sm:h-56 md:h-64 lg:h-96 bg-transparent flex justify-around relative left-0 md:left-0 xl:left-20">
            <img class="md:absolute w-max md:w-1/2 h-full left-0  sm:left-0 lg:left-0 rounded-xl shadow-lg"
              :src="'img/katalog/katalog2.jpg'" alt="katalog 2" />
            <!-- <img class="md:absolute w-max md:w-1/2  h-full left-0 sm:left-0 lg:left-32 rounded-xl shadow-lg" :src="'img/katalog/katalog1.jpg'" alt="katalog 1" /> -->
            <img class="md:absolute w-max md:w-1/2  h-full left-10 sm:left-18 lg:left-24 rounded-xl shadow-lg"
              :src="'img/katalog/katalog3.jpg'" alt="katalog 3" />
            <img class="md:absolute w-max md:w-1/2  h-full left-20 sm:left-36 lg:left-48 rounded-xl shadow-lg"
              :src="'img/katalog/katalog4.jpg'" alt="katalog 4" />
          </div>
          <div class=" w-full md:w-1/2 h-32 sm:h-56 md:h-96 flex flex-col lg:items-start lg:justify-center ">
            <div class="bg-white  shadow-xl rounded-md pl-2 border-b-4 border-t-4 border-primary px-4 py-2">
              <h1 class=" text-base sm:text-2xl md:text-4xl whitespace-pre-wrap tracking-wider sm:mb-2"><strong
                  class="">Katalog</strong></h1>
              <p class=" text-xs md:text-lg  text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                nesciunt
                ratione, impedit in quod magni neque
                ut, corrupti ipsam voluptatum et molestiae voluptate? Cumque debitis expedita tempore eius velit est.</p>
            </div>
          </div>
        </div>
      </section>
</template>
