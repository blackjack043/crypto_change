<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Форма оплаты</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="styles.css">
	<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
	<script>
		var transact = 20221641900161277;
		var time = 1644859635000
	</script>
</head>
<body>
	<div class="cl1"> 
		<div>
			<h1>Форма оплаты</h1>
		</div>
	</div>
<div id="app">
	<div class="error" style="display: none">ОШИБКА:</div>

	<div class="cl2">
		<div><b>Время обмена:</b> {{min}} мин {{sec}} сек</div> 
		<div><b>Направление обмена:</b> QIWI RUB  →  Bitcoin BTC</div>
		<div><b>Курс обмена:</b> 3330733.14 RUB → 1 BTC</div>
		<div><b>Сумма:</b> <span class="cl3"><span id="sum">123.45</span></span>
			<img src="img/copy.svg" @click="copy('sum')"><span v-show="sum" class="copys">копировано</span>
		</div>
		<div><b>Кошелек:</b> 
			<span class="cl3"><span id="wallet">79609586774</span></span>
			<img src="img/copy.svg" @click="copy('wallet')"><span  v-show="wallet" class="copys">копировано</span>
		</div>
	</div>

	
	</div>
	<script src="scripts.js"></script>
</body>
</html>