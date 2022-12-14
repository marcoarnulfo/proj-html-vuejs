import { reactive } from "vue";

export const store = reactive({
    causes: false,
    articles: false,
    values: [
        {
            icons : 'fa-solid fa-droplet',
            title : 'Clean Water',
            text : 'Nullam convallis, orci in congue aliquet, diam maturis cursus urna, id maximum lectus magna maximus.',
        },
        {
            icons : 'fa-solid fa-stethoscope',
            title : 'Vaccinations',
            text : 'Nullam convallis, orci in congue aliquet, diam maturis cursus urna, id maximum lectus magna maximus.',
        },
        {
            icons : 'fa-solid fa-graduation-cap',
            title : 'Education',
            text : 'Nullam convallis, orci in congue aliquet, diam maturis cursus urna, id maximum lectus magna maximus.',
        },
        {
            icons : 'fa-solid fa-seedling',
            title : 'Farming',
            text : 'Nullam convallis, orci in congue aliquet, diam maturis cursus urna, id maximum lectus magna maximus.',
        },
    ],
    icons: [
        {
            text: 'fa-brands fa-facebook-f',
            class: 'facebook',
        },
        {
            text: 'fa-brands fa-instagram',
            class: 'instagram',
        },
        {
            text: 'fa-brands fa-twitter',
            class: 'twitter',
        },
        {
            text: 'fa-brands fa-youtube',
            class: 'youtube',
        },
    ],
    links: [
        {
            text: 'HOME'
        },
        {
            text: 'MISSION'
        },
        {
            text: 'CAUSES'
        },
        {
            text: 'JOURNAL'
        },
        {
            text: 'DONATE'
        },
    ],
    causesImg: [
        {
            img: 'avada-charity-fair-trade-featured-400x300'
        },
        {
            img: 'avada-charity-shelter-featured-400x300'
        },
        {
            img: 'avada-charity-farming-featured-400x300'
        },
        {
            img: 'avada-charity-vaccines-featured-400x300'
        },
    ],
    causesImgHidden: [
        {
            img: 'avada-charity-fair-trade-featured-400x300'
        },
        {
            img: 'avada-charity-shelter-featured-400x300'
        },
        {
            img: 'avada-charity-farming-featured-400x300'
        },
        {
            img: 'avada-charity-vaccines-featured-400x300'
        },
        {
            img: 'avada-charity-fair-trade-featured-400x300'
        },
        {
            img: 'avada-charity-shelter-featured-400x300'
        },
        {
            img: 'avada-charity-farming-featured-400x300'
        },
        {
            img: 'avada-charity-vaccines-featured-400x300'
        },
    ],
    leftCard: [
        {
            title: 'Understanding community complexities',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum',
            img: 'photo-1444213007800-cff19e1677ac-600x450'
        }
    ],
    leftCardHidden: [
        {
            title: 'Understanding community complexities',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum',
            img: 'photo-1444213007800-cff19e1677ac-600x450'
        }
    ],
    cardRight: [
        {
            title: 'The human story of uniqueness',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum',
            img: 'photo-1444664597500-035db93e2323-177x142'
        },
        {
            title: 'Sustainable trade tactics',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum',
            img: 'photo-1447430617419-95715602278e-177x142'
        },
        {
            title: 'Farmers making a difference',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum',
            img: 'photo-1460230525622-630fe3294cd7-177x142'
        },
        {
            title: 'Farmers making a difference',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum',
            img: 'photo-1460600421604-5e138c208b9c-177x142'
        },
    ],
    cardRightHidden: [
        {
            title: 'The human story of uniqueness',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum',
            img: 'photo-1444664597500-035db93e2323-177x142'
        },
        {
            title: 'Sustainable trade tactics',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum',
            img: 'photo-1447430617419-95715602278e-177x142'
        },
        {
            title: 'Farmers making a difference',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum',
            img: 'photo-1460230525622-630fe3294cd7-177x142'
        },
        {
            title: 'Farmers making a difference',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum',
            img: 'photo-1460600421604-5e138c208b9c-177x142'
        },
    ],
})