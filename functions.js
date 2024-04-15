document.addEventListener("DOMContentLoaded", function() {
    // Sample writer data (replace with your actual data)
    var writers = [
      "Jane Austen",
      "Leo Tolstoy",
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Emily Dickinson",
      // Add more writers as needed
    ];
  
    // Sort the writers array alphabetically
    writers.sort();
  
    // Get the writers list element
    var writersList = document.getElementById("writers");
  
    // Populate the writers list
    writers.forEach(function(writer) {
      var listItem = document.createElement("li");
      listItem.textContent = writer;
      writersList.appendChild(listItem);
    });
  });
  