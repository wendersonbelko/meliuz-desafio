import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacters } from '../../services/comicVine.api';
import { ICharacter } from '../../services/interfaces/characters';
import ReactHtmlParser from 'react-html-parser';
import {
    Container,
    Profile,
    Input,
    Label,
    Div,
 } from './styles';

export const Character = () => {
    const [character, setCharacter] = useState<ICharacter>();
    const { id } = useParams<{ id: string }>();

    const callApi = async () => {
        getCharacters({ id: Number(id) }).then((data: any) => {
            setCharacter(data.data.results[0]);
        })
    }

    useEffect(() => {
        callApi()
    }, []);

    return (
        <Container>
            <Profile src={character?.image.original_url}/>
            <Div>
                <Label>Name</Label>
                <Input placeholder="Name" disabled={true} value={character?.name} />
            </Div>
            <Div>
                <Label>Real name</Label>
                <Input placeholder="Real name" disabled={true} value={character?.real_name} />
            </Div>
            <Div>
                <Label>gender</Label>
                <Input placeholder="Gender" disabled={true} value={character?.gender} />
            </Div>
            <Div>
                <Label>Birthday</Label>
                <Input placeholder="Birthday" disabled={true} value={character?.birth} />
            </Div>
            <Div>{ ReactHtmlParser (String(character?.description)) }</Div>
        </Container>
    )
}