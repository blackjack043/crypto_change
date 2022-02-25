<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Форма 6</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="styles.css">
	<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>
<body>
	<div class="cl1"> 
		<div>
			<h1>Форма 6</h1>
		</div>
	</div>
<div id="app">
	<div class="cl2">
		<div class="cl3-1"> 
			<div class="cl4-1">
				<div class="cl7-1">
					<div class="cl7-2"> Отдаете </div>	
					<div class="cl7-3"  @click="toogle = !toogle" v-out="toogle">
						<div><img :src="`img/${current_from.image_from}`">{{current_from.name_from}} {{current_from.currency_from}}</div>
						<div  v-if="Arr11.length">▼</div>
					</div>
					<div id="toggle" class="cl7-4" v-show="toogle" style="display: flex;">
						<div class="cl7-5" v-for="(item, i) in Arr11" @click="fn5(item, i)"><img :src="`img/${item.image_from}`">{{item.name_from}} {{item.currency_from}}</div>

					</div>	
				</div>
			</div>
			<div class="cl4-1">
				<div class="cl7-1">
					<div class="cl7-2"> Получаете </div>	
					<div class="cl7-3"   @click="toogle1 = !toogle1" v-out="toogle1">
						<div v-if="initial">Выберите направление обмена</div>
						<div v-if="!initial"><img :src="`img/${current_to.image_to}`">{{current_to.name_to}} {{current_to.currency_to}}</div>
						<div v-if="Arr22.length">▼</div>
					</div>
					<div id="toggle1" class="cl7-4" v-show="toogle1" style="display: flex;">
						<div class="cl7-5" v-for="item in Arr22" @click="fn6(item)"><img :src="`img/${item.image_to}`">{{item.name_to}} {{item.currency_to}}</div>

					</div>	
				</div>
			</div>
			<div class="cl4-1" v-if="!initial">
				<div>Минимальная сумма: {{current_pair.min}} {{current_pair.currency_from}}</div>
				<br>
				<div>Максимальная сумма: {{current_pair.max}} {{current_pair.currency_to }}</div> 
				<br>
				<div>Курс обмена: {{current_pair.in}} {{current_pair.currency_from}} → {{current_pair.out}} {{current_pair.currency_to }}</div>
				<br>
				<div>Резерв: {{current_pair.amount}}  {{current_pair.currency_to}}</div>
			</div>
			<div class="cl4-1" v-if="!initial">
				<a :href="'?' + current_pair.url_from + '-to-' + current_pair.url_to" class="button">Обменять</a>
			</div>
		</div>
	</div>
</div>

	<script src="scripts.js"></script>
</body>
</html>