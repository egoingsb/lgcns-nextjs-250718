"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export function Control() {
    const params = useParams();
    if (!params.id) {
        return null;
    }
    return (
        <>
            <li>
                <Link href={"/update/" + params.id}>update</Link>
            </li>
            <li>
                <button>delete</button>
            </li>{" "}
        </>
    );
}
