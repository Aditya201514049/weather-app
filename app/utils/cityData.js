export const popularCities = [
  // Bangladesh cities
  "Dhaka",
  "Chittagong",
  "Khulna",
  "Rajshahi",
  "Sylhet",
  "Barisal",
  "Rangpur",
  "Comilla",
  "Narayanganj",
  "Mymensingh",
  "Jessore",
  "Bogra",
  "Dinajpur",
  "Cox's Bazar",
  "Tangail",
  
  // Indian cities
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Agra",
  
  // Pakistani cities
  "Karachi",
  "Lahore",
  "Faisalabad",
  "Rawalpindi",
  "Multan",
  "Hyderabad",
  "Peshawar",
  "Islamabad",
  "Quetta",
  "Sargodha",
  
  // Nepal cities
  "Kathmandu",
  "Pokhara",
  "Lalitpur",
  "Bhaktapur",
  "Biratnagar",
  
  // Sri Lanka cities
  "Colombo",
  "Kandy",
  "Galle",
  "Jaffna",
  "Negombo",
  
  // Bhutan cities
  "Thimphu",
  "Paro",
  "Punakha",
  
  // Maldives cities
  "Male",
  
  // Afghanistan cities
  "Kabul",
  "Kandahar",
  "Herat",
  "Mazar-i-Sharif",
  
  // International cities
  "London",
  "New York",
  "Tokyo",
  "Paris",
  "Berlin",
  "Rome",
  "Madrid",
  "Moscow",
  "Beijing",
  "Sydney",
  "Mumbai",
  "Dubai",
  "Singapore",
  "Bangkok",
  "Cairo",
  "Los Angeles",
  "Toronto",
  "Mexico City",
  "Rio de Janeiro",
  "Cape Town",
  "Istanbul",
  "Seoul",
  "Amsterdam",
  "Stockholm",
  "Vienna",
  "Prague",
  "Athens",
  "Dublin",
  "Hong Kong",
  "Shanghai",
  "Jakarta",
  "Kuala Lumpur",
  "Manila",
  "Warsaw",
  "Budapest",
  "Lagos",
  "Nairobi",
  "Auckland",
  "Vancouver",
  "Chicago",
  "Boston",
  "Dallas",
  "Miami",
  "San Francisco",
  "Seattle",
  "Barcelona",
  "Lisbon",
  "Copenhagen",
  "Oslo"
];

export const filterCities = (query) => {
  const lowercaseQuery = query.toLowerCase();
  
  return popularCities.filter(city => 
    city.toLowerCase().includes(lowercaseQuery)
  ).slice(0, 5); // Return at most 5 suggestions
};
