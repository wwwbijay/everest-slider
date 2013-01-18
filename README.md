everest-slider
==============

Everest Slider

    Simple jquery slider with Responsive feature and Small file size (Less than 3kb when minified).
    Everest Slider is easy to implement and configure.
    Browser support: Firefox, Chrome, Safari, IE8+
    
    How to install
Step 1: Link required files

First and most important, the jQuery library needs to be included. Next, download the package from this site and link the everest slider CSS file (You can replace the css file if you want custom theme) and Javascript file.

<link type="text/css" href="css/slider.css" rel="stylesheet" />
        
<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="js/everest-min-1.0.0.2.js"></script>
        

Step 2: Create HTML markup

Create a <ul id="slider"> element, with a <li> for each slide. Slides can contain images, video, or any other HTML content!

<ul id="slider">
    <li>
	<div class="everest_desc">
	This is a test description for first image of everest slider. 
	This content can be changed later as you need.
	</div>
	<img src="images/1.jpg" alt="slider-image-1" />
	</li>
	<li>
	<div class="everest_desc">
	This is a test description for first image of everest slider. 
	This content can be changed later as you need.
	</div>
	<img src="images/2.jpg" alt="slider-image-1" />
	</li>
	<li>
	<div class="everest_desc">
	This is a test description for first image of everest slider. 
	This content can be changed later as you need.
	</div>
	<img src="images/3.jpg" alt="slider-image-1" />
	</li>
	<li>
	<div class="everest_desc">
	This is a test description for first image of everest slider. 
	This content can be changed later as you need.
	</div>
	<img src="images/4.jpg" alt="slider-image-1" />
	</li>
    <li>
	<div class="everest_desc">
	This is a test description for first image of everest slider. 
	This content can be changed later as you need.
	</div>
	<img src="images/4.jpg" alt="slider-image-1" />
	</li>
</ul>
    

Step 3: Call the Everest Slider

Call .everest() on <ul id="slider">. Note that the call should be made inside of a $(document).ready() call.

<script type="text/javascript">
$(document).ready(function(){
	$('#slider').everest({
	duration: 500,
	auto: true,
	pages: true,
	});			   
});
</script>
    

Check the demo.
Configuration and Options
1. duration
Slide transition duration (in ms)

default: 500

options: integer

2. delay
Time duration between two transition when in auto mode.

default: 2000

options: integer

3. auto
Auto show starts playing on load. If false, slideshow will start when the "Start" control is clicked.

default: true

options: boolean (true / false)

4. pages
If true, Pagination controls will be added

default: true

options: boolean (true / false)

5. control
If true, "Next" / "Prev" controls will be added

default: true

options: boolean (true / false)

6. responsive
If true, the slider will be responsive and changes its size according to the width of its wrapper.

default: false

options: boolean (true / false)


    
