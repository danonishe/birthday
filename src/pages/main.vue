<template>
 <div id="main">
    <h1>Дорогие друзья!</h1>
    <div><span>В этот прекрасный день хочу поздравить Вас с днём рождения! Я очень сильно люблю каждого и желаю вам только лучшего! Пускай все ваши мечты исполняются, а желания сбываются! </span></div>
    <img src="../assets/pictures/friends.png"/>
 </div>
 <div><span>С днем рожденья поздравляю,<br>
Пожелаю от души<br>
Исполнения желаний,<br>
Покорения вершин!<br>
<br>
Положительных эмоций,<br>
Солнца, света и тепла,<br>
Чтобы долгая дорога<br>
В удовольствие была.<br>
<br>
Каждый день встречать с улыбкой,<br>
Не грустить и не болеть,<br>
Наслаждаться каждым часом,<br>
Ни о чем не сожалеть!</span></div>
<div><img src="../assets/pictures/pic13.png"/></div>

<div><span>Помните, что у Вас есть друзья, которые вас всегда поддержат и обнимут!</span></div>
<div><img src="../assets/pictures/pic2.png"/></div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import '../assets/layout/index.scss';
  #main
  {
    margin: 10%;

  }

  img
  {
    width: 80%;
    margin: 2%;

  }

  span{
    @include adaptiv-font(30, 11);
    font-family: 'Merriweather', serif;
  }
  h1 
  {
    @include adaptiv-font(40, 28);
    font-family: 'Merriweather', serif;
    font-weight: 900;
    
  }
</style>