"use client"

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    if (!gitHubSignIn) {
        return <p className="font-bold text-4xl mt-4 mb-4 ml-4"> You need to be signed in to see your shopping list!</p>
    }
    
    return (
        <div>
            <h1 className="font-bold text-4xl mb-4 ml-2">Shopping List App</h1>
            <p className = "font-bold text-xl ml-2">{ user ? "Welcome Buddy!" : "You need to sign in to see content buddy!"}</p>
            {user && <p className="ml-2 text-lg">You are signed in as: {user.displayName} ({user.email}).</p>}

            <p>
                {user ? (
                    <>
                        <button onClick={firebaseSignOut} className="hover:underline text-lg ml-2">Sign Out</button>
                        <p><a class="text-lg hover:underline ml-2" href="/week-10/shopping-list">Continue to your Shopping List</a></p>
                    </>
                ) : (
                    <button onClick={gitHubSignIn} className="hover:underline text-lg ml-2">Sign in with GitHub</button>
                )}
            </p>
        </div>
    );
    }

