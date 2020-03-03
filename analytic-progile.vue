<template>
    <div class="container">
        <ul class="breadcrumb mb_30">
            <li><a href="#">Главная</a></li>
            <li><span>Профиль аналитика</span></li>
        </ul>

        <div class="profile">
            <div class="profile__header">
                <div class="profile__header_content">
                    <div class="profile__header_title">{{info.user.username}}   </div>
                    <div class="profile__header_meta">
                        <div class="raty"  data-readOnly="true" data-score="4"></div>
                        <span>{{info.user.last_login_at}}</span>
                    </div>
                </div>
                <ul class="profile__header_actions">
                    <li><a href="#" class="btn btn_green">Подписаться  на прогнозы</a></li>
                    <li><a href="#" class="btn btn_blue">Заказать у меня прогноз</a></li>
                    <li><a href="#" class="btn btn_blue">Подключить робота</a></li>
                </ul>
            </div>

            <div class="profile__body">
                <div class="profile__title">Персональные данные</div>
                <div class="firstBlockProfile ">
                    <div class="profileFirst">
                        <div class="profile__item">
                            <div class="profile__item_label">ID</div>
                            <div class="profile__item_text">{{info.id}}</div>
                        </div>
                        <div class="profile__item">
                            <div class="profile__item_label">Возраст</div>
                            <div class="profile__item_text">{{info.user.birthday}}</div>
                        </div>
                        <div class="profile__item">
                            <div class="profile__item_label">Дата регистрации</div>
                            <div class="profile__item_text">{{info.user.created_at}}</div>
                        </div>
                        <div class="profile__item">
                            <div class="profile__item_label">Общее количество прогнозов</div>
                            <div class="profile__item_text">{{info.forecast_total}}</div>
                        </div>
                    </div>
                    <div v-show="toogle" class="secondBlockProfile  " >
                        <div class="profileFirst">
                            <div class="profile__item">
                                <div class="profile__item_label">Ф.И.О.</div>
                                <div class="profile__item_text">{{info.user.name}} {{info.user.lastname}} {{info.user.lastname2}}</div>
                            </div>
                            <div class="profile__item">
                                <div class="profile__item_label">Пол</div>
                                <div class="profile__item_text">{{info.sex}}</div>
                            </div>
                            <div class="profile__item">
                                <div class="profile__item_label">Опыт на финансовых рынках</div>
                                <div class="profile__item_text">{{info.expierence_year}}</div>
                            </div>
                            <div class="profile__item">
                                <div class="profile__item_label">Количество подписчиков на аналитику</div>
                                <div class="profile__item_text">{{info.subscrubers}}</div>
                            </div>
                        </div>
                        <div class="profileFirst">
                            <div class="profile__item">
                                <div class="profile__item_label">E-mail</div>
                                <div class="profile__item_text">{{info.user.email}}</div>
                            </div>
                            <div class="profile__item">
                                <div class="profile__item_label">Страна</div>
                                <div class="profile__item_text">{{info.country}}</div>
                            </div>
                            <div class="profile__item">
                                <div class="profile__item_label">Дипломы и сертификаты аналитика</div>
                                <div class="profile__item_text">{{info.expierence_year}}</div>
                            </div>
                            <div class="profile__item">
                                <div class="profile__item_label">Методы анализа рынка</div>
                                <div class="profile__item_text">{{info.trademethods}} </div>
                            </div>

                        </div>
                        <div class="profileFourth">
                            <div class="profile__item">
                                <div class="profile__item_label">Телефон</div>
                                <div class="profile__item_text">{{info.user.phone}}</div>
                            </div>
                            <div class="profile__item">
                                <div class="profile__item_labelFor">Город</div>
                                <div class="profile__item_labelFor">{{info.city}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <strong><div @click="toogle = !toogle" class='showAllInfo'>Показать еще</div></strong>
        </div>
    </div>

</template>

<script>
    export default {
        name: "analytic-progile",
        mounted() {
            axios
                .get(`http://finprognoz.double.systems/api/v1/analyst/profile?id=591
`,
                    {        headers: { Authorization: 'Bearer qyWItB1DJPTqjubatUzc6ZLUgLKsx_2W' }}
                )                        .then(response => (this.info = response.data)
            );

        }
    }
</script>

<style scoped>

</style>