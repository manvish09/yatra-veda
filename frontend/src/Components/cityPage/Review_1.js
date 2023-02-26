import React, { Component } from "react";

export default class Review_1 extends Component {
  render() {
    return (
      <div className="my-4">
        <a
          href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Aakanksha Rangdal
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
          "I had the pleasure of visiting Hyderabad and immersing myself in the local culture. The city's rich history and diverse population make for a truly unique experience. From the delicious food to the stunning architecture, there's so much to see and explore. I particularly enjoyed learning about the traditions and customs of the people here, and the warm hospitality that I received made me feel truly welcome. Overall, Hyderabad is a must-visit destination for anyone interested in Indian culture."
          </p>
        </a>
      </div>
    );
  }
}
