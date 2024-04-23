import React from 'react';

const Cards = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <img className="w-full h-48 object-cover" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/data_analyticstrendsmin.jpg" alt="Card 1" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Card Title 1</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper fermentum.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <img className="w-full h-48 object-cover" src="https://datarundown.com/wp-content/uploads/2023/05/Model-Data-Analytics.jpg" alt="Card 2" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Card Title 2</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper fermentum.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <img className="w-full h-48 object-cover" src="https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png" alt="Card 3" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Card Title 3</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper fermentum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
