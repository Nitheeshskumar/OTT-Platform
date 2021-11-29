import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
const ListingPageContainer = React.lazy(() => import('../Modules/ListingPage/ListingPageContainer'))


export default function RootRoutes() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<ListingPageContainer/>} />
                </Routes>
            </Suspense>
        </Router>
    );
}