<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Форма 2</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="styles.css">
	<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>
<body>
	<div class="cl1"> 
		<div>
			<h1>Форма 2</h1>
		</div>
	</div>

	<div class="cl2" id="app">
		<div class="cl3"> 
			<div class="error"  v-show="err" style="display: flex">{{err}}</div>
			<form action="#" @submit="fn_post" method="post">

				<div class="cl4"> 
					Отдаете:
					<div class="cl4-1"> 
						<span v-bind:class="[type_from == '' ? 'active' : '']" @click="fn10('')">Все</span>
						<span v-for="item in getTypeFrom" v-bind:class="[type_from == item ? 'active' : '']" @click="fn10(item)">{{item}}</span>

					</div>
					<div class="cl5">
						<div class="cl6">
							<div class="cl8"><input name="from" value="" v-model="current_from_value" @input="onInput1"    @change="onChange1"></div>
							<div class="cl9"   @click="toogle = !toogle" v-out="toogle">
								<div class="cl10"><img :src="`img/${current_from.image_from}`">{{current_from.name_from}} {{current_from.currency_from}}</div>
								<div class="cl11" v-if="Arr11.length">▼</div>
								<div id="toggle" class="cl12" v-show="toogle" style="display: flex;">
									<div class="cl13" v-for="(item, i) in Arr11" @click="fn5(item, i)"><img :src="`img/${item.image_from}`">{{item.name_from}} {{item.currency_from}}</div>

								</div>		
							</div>

						</div>	
						<div class="cl7">Минимальная сумма: {{current_pair.min}}  {{current_pair.currency_from}}</div>
					</div>
				</div>
				<div class="cl4"> 
					Получаете:
					<div class="cl4-1"> 
						<span v-bind:class="[type_to == '' ? 'active' : '']" @click="fn11('')">Все</span>
						<span v-for="item in getTypeTo" v-bind:class="[type_to == item ? 'active' : '']" @click="fn11(item)">{{item}}</span>
					</div>
					<div class="cl5">
						<div class="cl6">
							<div class="cl8"><input name="to" v-model="current_to_value" @input="onInput2" @change="onChange2"></div>
							<div class="cl9"   @click="toogle1 = !toogle1" v-out="toogle1">
								<div class="cl10"><img :src="`img/${current_to.image_to}`">{{current_to.name_to}} {{current_to.currency_to}}</div>
								<div class="cl11" v-if="Arr22.length">▼</div>
								<div id="toggle1" class="cl12" v-show="toogle1" style="display: flex;">
									<div class="cl13" v-for="item in Arr22" @click="fn6(item)"><img :src="`img/${item.image_to}`">{{item.name_to}} {{item.currency_to}}</div>

								</div>		
							</div>

						</div>	
						<div class="cl7">Максимальная сумма: {{current_pair.max}}  {{current_pair.currency_to}}</div>
					</div>
				</div>	
				<div class="cl14">
					<div>Курс обмена: {{current_pair.in}} {{current_pair.currency_from}} - {{current_pair.out}} {{current_pair.currency_to }} </div>
					<div>Резерв: {{current_pair.amount}}  {{current_pair.currency_to}}</div>
				</div>	
				<div class="cl15">
					<input type="hidden" name="name_from" value="" v-model="current_pair.name_from">
					<input type="hidden" name="name_to" value="" v-model="current_pair.name_to">
					<button  v-bind:class="[err ? 'error-btn' : '']">Обменять</button>
				</div>
			</form>

		</div>
	</div>

	<script src="scripts.js"></script>
</body>
</html>