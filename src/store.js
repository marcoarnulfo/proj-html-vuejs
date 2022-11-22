import { reactive } from "vue";

export const store = reactive({
    causes: 1,
    articles : 1,
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
    showArticles(){
        this.articles++
        console.log(this.articles);
    },
    showCauses(){
        this.causes++
        console.log(this.causes);
    }
})