<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Форма 8</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="styles.css">
	<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>
<body>
	<div class="cl1"> 
		<div>
			<h1>Форма 8</h1>
		</div>
	</div>


<div id="app">
	<div class="cl2">
		<div class="cl3"> 
			<div class="error" v-if="err" style="display: none;"></div>
			<form action="#" @submit="fn_post" method="post">
			<div class="cl4"> 
				Отдаете:
				<input name="from" value="1" v-model="current_from_value" @input="onInput1"    @change="onChange1">
				<div class="cl5"  @click="toogle = !toogle" v-out="toogle">
					<div><img :src="`img/${current_from.image_from}`">{{current_from.name_from}} {{current_from.currency_from}}</div>
					<div class="cl6"  v-if="Arr11.length">▼</div>
				</div>
				<div id="toggle" class="cl9" v-show="toogle" style="display: flex;">
					<div class="cl10" v-for="(item, i) in Arr11" @click="fn5(item, i)"><img :src="`img/${item.image_from}`">{{item.name_from}} {{item.currency_from}}</div>
				</div>
			</div>

			<div class="cl7">
				<div class="cl8" v-for="item in Arr2" @click="fn6(item)"> 
					<div><img :src="`img/${item.image_to}`">{{item.name_to}} {{item.currency_to}}</div>
 					<div>Курс обмена:</div>
					<div>{{item.in}} {{item.currency_from}} → {{item.out}} {{item.currency_to }}</div> 
					<div>Получаете:</div>
					<div>{{output(item)}} {{item.currency_to}}</div>
					<div><a :href="'?' + item.url_from + '-to-' + item.url_to" class="button"> Обменять</a></div>
				</div>
			</div>
		</form>
		</div>
	</div>
	</div>

	<script src="scripts.js"></script>
</body>
</html>