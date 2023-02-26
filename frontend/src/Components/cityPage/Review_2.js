import React, { Component } from "react";

export default class Review_2 extends Component {
  render() {
    return (
      <div className="my-4">
        <a
          href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Srinivas Mekala
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
          "I recently had the opportunity to visit Bali and was fascinated by the unique culture of this region. The people here have a rich history and deep connection to the land, and it was inspiring to see how they have maintained their traditional way of life in the face of modernization. From the vibrant textiles to the intricate crafts, every aspect of Balo culture is infused with a sense of pride and reverence. I felt honored to be welcomed into their community and left with a newfound appreciation for their heritage. If you're looking for an authentic cultural experience, Bali is definitely worth a visit."
          </p>
        </a>
      </div>
    );
  }
}
