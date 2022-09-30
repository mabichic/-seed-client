import { GetServerSideProps, GetStaticProps } from "next";
import type { Session } from "next-auth";
import { useSession, getSession } from "next-auth/react";
export default function Page() {

    // const temp = useSession();
    const { data: session } = useSession()
    console.log(session?.user.roles);

    if(session){
        return(
            <>
                admin : {session?.user.roles}
                뭐고 도대체
            </>
        )
    }
    

}