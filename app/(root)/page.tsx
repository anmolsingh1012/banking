import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import RightSidebar from '@/components/ui/RightSidebar';

const Home = () => {
    const loggedIn = {firstName: 'Anmol', lastName:'Singh',
        email:'contact@anmol.dev'
    };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account
                    and transations efficiently."
                    />

                    <TotalBalanceBox
                    accounts={[]}
                    totalBanks ={1}
                    totalCurrentBalance={1500.64}
                    />

                </header>
                RECENT Transactions
            </div>

            <RightSidebar
            user={loggedIn}
            transactions= {[]}
            banks= {[{currentBalance:123.45},
                {currentBalance:500.12}]}
            />
        </section>
    )
}
export default Home