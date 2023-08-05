import { Layout } from 'antd';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';

// Custom components
import AddArticle from './subpages/AddArticle';
import SideMenu from './fragments/SideMenu';
import NotFound from './subpages/NotFound';
import TopAppBar from './fragments/TopAppBar';
import Landing from './subpages/Landing';
import LinkMgmt from './subpages/LinkMgmt';
import ArticleMgmt from './subpages/ArticleMgmt';
import ImgMgmt from "./subpages/ImgMgmt";

const pages = [
    {path: 'addArticle', name: 'Add Articles', elem: <AddArticle />},
    {path: 'articleMgmt', name: 'Manage Articles', elem: <ArticleMgmt />},
    {path: 'linkMgmt', name: 'Manage Related Links', elem: <LinkMgmt />},
    {path: 'imgMod', name: 'Image Post Moderation', elem: <ImgMgmt />}
]

export default function App() {
    return <>
        <Router>
            <Layout style={{minHeight: '100vh'}}>
                <Switch>
                    {
                        pages.map(p => <Route path={'/' + p.path} key={p.name}><TopAppBar page={p.name} /></Route>)
                    }
                    <Route exact path='/'><TopAppBar page='Home' /></Route>
                    <Route><TopAppBar page='404 - Not Found' /></Route>
                </Switch>
                <Layout style={{flexDirection: 'row'}}>
                    <Switch>
                        {
                            pages.map(p => <Route path={'/' + p.path} key={p.path}><SideMenu page={p.path} ps={pages} /></Route>)
                        }
                        <Route><SideMenu page='' ps={pages} /></Route>
                    </Switch>
                    <Layout style={{padding: '.75rem'}}>
                        <Switch>
                            {
                                pages.map(p => <Route path={'/' + p.path} key={p.elem}>{p.elem}</Route>)
                            }
                            <Route exact path='/'><Landing /></Route>
                            <Route><NotFound /></Route>
                        </Switch>
                    </Layout>
                </Layout>
            </Layout>
        </Router>
    </>
}