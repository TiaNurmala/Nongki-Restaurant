<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

	<link rel="stylesheet" type="text/css" href="../style/menu.css">
	<link rel="icon" href="../assets/fast-food.png">
	<!-- <link rel="stylesheet" type="text/css" href=""> -->
	<title>NONGKI</title>
	<style type="text/css">
	@font-face {
  font-family: desc;
  src: url(../font/IndieFlower-Regular.ttf);
}

@font-face {
  font-family: roboto;
  src: url(../font/Roboto-Regular.ttf);
}
 footer {
 	font-family: desc;
 	font-size: 25px;
 }
</style>
</head>
<body>
	<?php include "menu_header.php" ?>
	<div class="welcomee">
	<!-- <h1 class="mid">WELCOME</h1> -->
	<!-- <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> -->
		<div class="middle">
			<div class="pilihan-menu">
				<a class="pilihan-menu-item active" href="#" style="font-family: roboto;">All Menu</a>
				<img width="5px" src="../assets/line.png">
				<a class="pilihan-menu-item" href="#" style="font-family: roboto;">Breakfast</a>
				<img width="5px" src="../assets/line.png">
				<a class="pilihan-menu-item" href="#" style="font-family: roboto;">Lunch</a>
				<img width="5px" src="../assets/line.png">
				<a class="pilihan-menu-item" href="#" style="font-family: roboto;">Dinner</a>
				<img width="5px" src="../assets/line.png">
				<h5 style="margin-right: 10px;margin-top:5px; color: white;padding-left: 30px;">Sort by : </h5>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort the content
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item disabled" href="#">Sort the content</a>
              <a class="dropdown-item" href="#">Nama A-Z</a>
              <a class="dropdown-item" href="#">Nama Z-A</a>
              <a class="dropdown-item" href="#">Harga Termurah</a>
              <a class="dropdown-item" href="#">Harga Termahal</a>
            </div>
          </div>
			</div>

		</div>
		<!-- <button class="sort">SORT</button>
		<button class="sortmundur">SORT MUNDUR</button>
		<button class="sortharga">SORT harga</button> -->
		<!-- <h1>All Menu</h1> -->
		 <div class="row mt-4 justify-content-center" style="display: none">
            <h1>All Menu</h1>
        </div>
	<div class="container">
	<div class="row mt-4 justify-content-center" id="menu-list">
		
	</div>
	</div>
			<!-- </div> -->
	<!-- <h1 class="mid" style="font-size: 100px; font-family: nongki; letter-spacing: 3px;">NONGKI</h1>
	<h2 class="mid" style="font-size: 45px; font-family: desc" >( jeNONG KItchen )</h3>
	<h3 class="mid" style="padding-top: 15px; font-size: 40px">healthy and yummy food</h4>
	<div class="button_cont" align="center"><a class="example_e" href="pages/menu.php" rel="nofollow noopener">BOOK NOW WITH US</a></div> -->
	<!-- <script src="https://code.jquery.com/jquery-3.4.1.js"> -->
	<script src="https://code.jquery.com/jquery-3.4.1.js">
	</script> 
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js">
	</script> 
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js">
	</script> 
	<script type="text/javascript" src="../style/js.js"></script>	
</div>

	

<footer style="background-color: white; text-align: center;">Copyright &copy; 2020 Tia Nurmala</footer>
</body>
</html>