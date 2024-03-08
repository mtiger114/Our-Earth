// Function to open overlay when a box is clicked
var boxes = document.querySelectorAll(".element");
boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "block";
  });
});

// Function to close overlay
function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}



  // Function to open search overlay
  function openSearchOverlay() {
    document.getElementById('searchOverlay').style.display = 'block';
    document.getElementById('searchInput').focus(); // Focus on search input field
  }

  // Function to close search overlay
  function closeSearchOverlay() {
    document.getElementById('searchOverlay').style.display = 'none';
  }

  // Function to search text in the page
  document.getElementById('searchInput').addEventListener('input', function() {
    var searchQuery = this.value.toLowerCase();
    var elements = document.querySelectorAll('body *');

    var searchResults = [];
    elements.forEach(function(element) {
      if (element.textContent.toLowerCase().includes(searchQuery)) {
        searchResults.push(element.outerHTML);
      }
    });
  });

