import React from "react"
import properties from "../property.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faBath, faRulerCombined, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const FeaturedProperties = () => {
  // only featured properties
  const featuredProperties = properties.filter((property) => property.isFeatured)

  return (
    <section className="py-16 bg-gray-50" id="featured">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>

        {/* Property Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-56 object-cover"
              />

              {/* Details */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600">
                  ₹{property.price.toLocaleString()}
                </h3>
                <h4 className="text-lg font-medium text-gray-800">{property.name}</h4>
                <p className="text-gray-500 flex items-center gap-2 mt-1">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500" />
                  {property.location}
                </p>

                {/* Specs */}
                <div className="flex justify-between text-gray-600 text-sm mt-4">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faBed} /> {property.bedrooms} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faBath} /> {property.bathrooms} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faRulerCombined} /> {property.square_feet} sqft
                  </span>
                </div>

                {/* Button */}
                <button className="mt-5 w-full py-2 px-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties
