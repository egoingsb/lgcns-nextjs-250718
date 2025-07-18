"use client";

import { useRouter } from "next/navigation";

export default function Create() {
    const router = useRouter();
    // @ts-expect-error evt는 나중에 처리하겠음.
    const submitHandler = (evt) => {
        const target = evt.target as HTMLFormElement;
        const title = target._title.value;
        const body = target._body.value;
        console.log("🚀 ~ submitHandler ~ title:", title, body);
        fetch("http://localhost:9999/topics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                body: body,
            }),
        })
            .then((resp) => resp.json())
            .then((result) => {
                console.log(result);
                const id = result.id;
                router.push("/read/" + id);
                router.refresh();
            });
        evt.preventDefault();
    };
    return (
        <div>
            <h2>Create</h2>
            <form onSubmit={submitHandler}>
                <p>
                    <input
                        type="text"
                        name="_title"
                        placeholder="제목을 입력하시오."
                    />
                </p>
                <p>
                    <textarea
                        name="_body"
                        placeholder="본문을 입력하시오."
                    ></textarea>
                </p>
                <p>
                    <input type="submit" value="생성" />
                </p>
            </form>
        </div>
    );
}
