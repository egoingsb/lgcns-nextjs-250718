"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
    const params = useParams();
    const router = useRouter();
    if (!params.id) {
        return null;
    }
    return (
        <>
            <li>
                <Link href={"/update/" + params.id}>update</Link>
            </li>
            <li>
                <button
                    onClick={async () => {
                        const resp = await fetch(
                            "http://localhost:9999/topics/" + params.id,
                            {
                                method: "DELETE",
                            }
                        );
                        router.push("/");
                        router.refresh();
                    }}
                >
                    delete
                </button>
            </li>{" "}
        </>
    );
}
