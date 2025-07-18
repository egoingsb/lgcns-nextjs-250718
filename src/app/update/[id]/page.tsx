"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    useEffect(() => {
        fetch("http://localhost:9999/topics/" + id)
            .then((resp) => resp.json())
            .then((topic) => {
                console.log("topic", topic);
                setTitle(topic.title);
                setBody(topic.body);
            });
    }, [id]);
    // @ts-expect-error evt는 나중에 처리하겠음.
    const submitHandler = (evt) => {
        const target = evt.target as HTMLFormElement;
        const title = target._title.value;
        const body = target._body.value;
        console.log("🚀 ~ submitHandler ~ title:", title, body);
        fetch("http://localhost:9999/topics/" + id, {
            method: "PUT",
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
            <h2>Update</h2>
            <form onSubmit={submitHandler}>
                <p>
                    <input
                        type="text"
                        name="_title"
                        placeholder="제목을 입력하시오."
                        value={title}
                        onChange={(evt) => setTitle(evt.target.value)}
                    />
                </p>
                <p>
                    <textarea
                        name="_body"
                        placeholder="본문을 입력하시오."
                        value={body}
                        onChange={(evt) => setBody(evt.target.value)}
                    ></textarea>
                </p>
                <p>
                    <input type="submit" value="생성" />
                </p>
            </form>
        </div>
    );
}
