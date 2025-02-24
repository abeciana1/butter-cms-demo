'use client'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { PageMarginWrapper } from '@/components/_layouts'
import OnClickButton from '@/components/_styled/OnClickButton'

const PersonalizePage = () => {
    const [ marketerPersona, setMarketerPersona ] = useState(Cookies.get('marketer') ? true : false)
    const [ developerPersona, setDeveloperPersona ] = useState(Cookies.get('developer') ? true : false)
    console.log('Marketer cookies', Cookies.get('marketer'))
    console.log('Developer cookies', Cookies.get('developer'))

    const setPersonaCookie = (persona: string) => {
        if (persona === 'marketer') {
            if (Cookies.get('developer')) {
                Cookies.remove('developer')
                setDeveloperPersona(false)
            }
            if (Cookies.get('marketer')) {
                Cookies.remove('marketer')
                setMarketerPersona(false)
            } else {
                Cookies.set('marketer', 'true', { expires: 1 })
                setMarketerPersona(true)
            }
        } else {
            if (Cookies.get('marketer')) {
                Cookies.remove('marketer')
                setMarketerPersona(false)
            }
            if (Cookies.get('developer')) {
                Cookies.remove('developer')
                setDeveloperPersona(false)
            } else {
                Cookies.set('developer', 'true', { expires: 1 })
                setDeveloperPersona(true)
            }
        }
    }

    return (
        <>
            <PageMarginWrapper>
                <h1>Personalization content powered by Butter</h1>
                <div>You are currently using {(!marketerPersona && !developerPersona) ? <b>no</b> : 'the '}{marketerPersona && <b>Marketer</b>}{developerPersona && <b>Developer</b>} persona</div>
                <section className='py-10'>
                    <h2>Personalization on a user level</h2>
                    <div className='space-y-5 max-w-fit'>
                        <OnClickButton
                            buttonText={`${marketerPersona ? 'Disable' : 'Enable'} Marketer persona`}
                            color={marketerPersona ? 'Red': 'Green'}
                            onClick={() => setPersonaCookie('marketer')}
                        />
                        <OnClickButton
                            buttonText={`${developerPersona ? 'Disable' : 'Enable'} Developer persona`}
                            color={developerPersona ? 'Red': 'Green'}
                            onClick={() => setPersonaCookie('developer')}
                        />
                    </div>
                </section>
            </PageMarginWrapper>
        </>
    )
}

export default PersonalizePage