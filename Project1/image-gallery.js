// JavaScript Document

        function displayLargeImage(imageUrl) {
            //Display the selected thumbnail in the large image area
            document.getElementById('selectedImage').src = imageUrl;

        }
        function displayCaption(element) {
            // Toggle the 'active' class to change the caption visibility
            element.classList.toggle('active');
        }
        function displayCaption(captionText) {
            var caption = event.target.nextElementSibling;
            caption.innerText = captionText;
            caption.style.display = 'block';
        }

        function hideCaption() {
            var caption = event.target.nextElementSibling;
            caption.style.display = 'none';
        }
        
        function toggleDescription(element) {
            // Toggle the 'active' class to show/hide the description
            element.classList.toggle('active');
        }

        function toggleDescription(element) {
            // Toggle the 'active' class to change the description
            element.classList.toggle('active');

            // Toggle between descriptions
            var desc1 = document.getElementById('description1');
            var desc2 = document.getElementById('description2');

            if (element.classList.contains('active')) {
                desc1.style.display = 'none';
                desc2.style.display = 'block';
            } else {
                desc1.style.display = 'block';
                desc2.style.display = 'none';
            }
        }
        function displayCaption(element) {
            // Toggle the 'active' class to change the caption visibility
            element.classList.toggle('active');
        }