import Footer from "./Footer";
import Foo from "./Foo";
import './Footer.css';
import './Footer1.css'

const Footer1 = () =>{
    let dummyfooter = [
        {
            id : 'f1',
            heading : 'Section',
            list1 : 'Home',
            list2 : 'Features',
            list3 : 'Pricing',
            list4 : 'FAQs',
            list5 : 'About'
        },
        {
            id : 'f2',
            heading : 'Products',
            list1 : 'Sauvage',
            list2 : 'Poison',
            list3 : 'Dolce Vita',
            list4 : 'Fahrenheit',
            list5 : 'Dune Homme'
        },
        {
            id : 'f3',
            heading : 'Planning',
            list1 : 'Budgeting',
            list2 : 'Selecting Team',
            list3 : 'Pricing',
            list4 : 'Moving In',
            list5 : 'Supervising Work'
        }
    ]
    return( 
        <div className="footer1">
            <Footer item1={dummyfooter}/>
            <div className="foo1">
            {/* <Foo /> */}
            </div>
        </div>
    );
}

export default Footer1;