// JavaScript to handle clicking on SVGs and redirecting
$(document).ready(function() {
  $('.work .description').on('click', function() {
    var url = $(this).attr('data-url');
    window.location.href = url; // Redirect to the specified URL
  });
});

function filterByCategory(category) {
  console.log('Filtering by category:', category);
  $('.work').each(function() {
    if (category === 'all' || $(this).data('category') === category) {
      $(this).show(); // Show the work item if it belongs to the selected category or if all categories are selected
    } else {
      $(this).hide(); // Otherwise, hide the work item
    }
  });
}

window.addEventListener('scroll', function() {
  var backToTopBtn = document.getElementById('back-to-top-btn');
  if (window.pageYOffset > 100) { 
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

document.getElementById('back-to-top-btn').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
