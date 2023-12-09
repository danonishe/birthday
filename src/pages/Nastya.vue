<template>
  <div id="Nastya">
    <h1>Моя любимая Настюшка!</h1>
    <div>
        <div class="Nastya_text"><span>Хочу поздравить тебя с днём рождения!<br>Мы уже знакомы не первый год, и я рада, что в один чудесный день Судьба свела нас. 
        Я очень тебя люблю и ценю (даже если невсегда это показываю!). Ты замечательная подруга и хороший и позитивный человек!</span></div>
        <img class="Nastya_img" src="../assets/pictures/pic6.png"/>
    </div>
    <div style="background: #b8ecfc">
      <img class="Nastya_img" src="../assets/pictures/pic10.png"/> 
       <div class="Nastya_text"><span>Тебе уже исполнилось 20 лет, но для тебя это только самое начало жизни. Впереди тебя ещё ждёт множество крутых, классных и
        крышесносных вещей. </span></div>
    </div>
    <div>
        <div class="Nastya_text"><span>Желаю тебе всегда оставаться на позитиве, сохранять радость внутри себя и не грусить из-за мелочей!</span></div><img class="Nastya_img" src="../assets/pictures/pic7.png"/>
    </div>
    <div style="background: #b8ecfc">
      <img class="Nastya_img" src="../assets/pictures/pic8.png"/> 
       <div class="Nastya_text"><span>Пусть ваша любовь будет всегда легкой и счастливой!!! Я держала свечу, когда твои отношения только зарождались, и надеюсь, что буду держать её на вашей свадьбе :) </span></div>
    </div>
    <div>
        <div class="Nastya_text"><span>Не забывай, что у тебя есть подружки, которые тебя всегда поддержат!</span></div><img class="Nastya_img" src="../assets/pictures/pic9.png"/>
    </div>
    <div style="background: #b8ecfc">
      <img class="Nastya_img" src="../assets/pictures/pic5.png"/> 
       <div class="Nastya_text"><span>Пусть твоё тело будет здоровым, дух сильным, а ass всегда very big!!!</span></div>
    </div>
    <div>
        <div class="Nastya_text"><span>Оставайся всегда умной, способной и красивой. И даже в тяжелые и сложные дни не забывай улыбаться!</span></div><img class="Nastya_img" src="../assets/pictures/pic3.png"/>
    </div>
    <div style="background: #b8ecfc">
      <img class="Nastya_img" src="../assets/pictures/pic4.png"/> 
       <div class="Nastya_text"><span>Живи, радуйся и сохраняй моменты. И пускай у тебя будет столько денег, чтобы хватило на всю твою корзину wildberries)) </span></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#Nastya
{
    display: flex;
    flex-direction: column;
    div
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        text-align:justify; 
    }

}
.Nastya_text
{
  padding: 2%;
}
.Nastya_img
    {
        width: 50%;
        margin: 0;
        border: 2px rgb(174, 174, 231) solid;
    }
</style>