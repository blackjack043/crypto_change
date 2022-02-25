<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Форма обмена</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="styles.css">
	<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
	<script>
		var min = 500;
		var max = 0.01501171;
		var rate = 0.0000003;
		var decimals_from = 2;
		var decimals_to = 8;
	</script>
</head>
<body>
	<div class="cl1"> 
		<div>
			<h1>Форма обмена</h1>
		</div>
	</div>
	<div id="app"> 
	<div class="error" v-if="err " style="display: flex"> {{err}}</div>

	<div class="cl2">
		<form method="get" action="/" @submit="fn_post">
			<div><b>Направление обмена:</b> QIWI RUB  →  Bitcoin BTC</div>
			<div><b>Курс обмена:</b> 3330733.14 RUB → 1 BTC</div>
			<div><b>Сумма отдаете:</b> <input name="amount_from" v-model="input_from" @input="input1" @change="change1"></div>
			<div><b>Минимальная сумма:</b> 500 RUB</div>
			<div><b>Сумма получаете:</b> <input name="amount_to" v-model="input_to" @input="input2" @change="change2"></div>
			<div><b>Максимальная сумма:</b> 0.01501171 BTC</div>
			<div><b>Кошелек:</b> <input name="wallet" value="" v-model="input_wallet"></div>
			<div><b>Ваш E-mail:</b><input type="text" name="email" value="mail@gmail.com"  id="email" v-model="email"/></div>
			<div><button >Отправить</button></div>
		</form>
	</div>
	</div>
	<script src="scripts.js"></script>
</body>
</html>