'use client'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { PageMarginWrapper } from '@/components/_layouts'
import OnClickButton from '@/components/_styled/OnClickButton'

const PersonalizePage = () => {
    const [marketerPersona, setMarketerPersona] = useState(false)
    const [developerPersona, setDeveloperPersona] = useState(false)
    const [ versionA, setVersionA ] = useState(false)
    const [ versionB, setVersionB ] = useState(false)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        setMarketerPersona(Cookies.get('marketer') === 'true')
        setDeveloperPersona(Cookies.get('developer') === 'true')
        setVersionA(Cookies.get('version-a') === 'true')
        setVersionB(Cookies.get('version-b') === 'true')
    }, [])

    const setABTestingCookie = (version: string) => {
        if (version === 'a') {
            if (Cookies.get('version-b') === 'true') {
                Cookies.remove('version-b')
                setVersionB(false)
            }
            if (Cookies.get('version-a') === 'true') {
                Cookies.remove('version-a')
                setVersionA(false)
            } else {
                Cookies.set('version-a', 'true', { expires: 1 })
                setVersionA(true)
            }
        } else {
            if (Cookies.get('version-a') === 'true') {
                Cookies.remove('version-a')
                setVersionA(false)
            }
            if (Cookies.get('version-b') === 'true') {
                Cookies.remove('version-b')
                setVersionB(false)
            } else {
                Cookies.set('version-b', 'true', { expires: 1 })
                setVersionB(true)
            }
        }
    }

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
        <section className='px-10'>
            <PageMarginWrapper>
                <section className='py-10'>
                    <h1>Personalization content powered by Butter</h1>
                    <div>
                        You are currently using{' '}
                        {!isClient || (!marketerPersona && !developerPersona) ? (
                            <b>no</b>
                        ) : (
                            <>
                                {marketerPersona && <b>Marketer</b>}
                                {developerPersona && <b>Developer</b>}
                            </>
                        )}{' '}
                        persona
                    </div>
                </section>
                <section className='py-10'>
                    <h2>Personalization on a user level</h2>
                    <div className='space-y-5 max-w-fit'>
                        <OnClickButton
                            buttonText={`${marketerPersona ? 'Disable' : 'Enable'} Marketer persona`}
                            color={marketerPersona ? 'Red' : 'Green'}
                            onClick={() => setPersonaCookie('marketer')}
                        />
                        <OnClickButton
                            buttonText={`${developerPersona ? 'Disable' : 'Enable'} Developer persona`}
                            color={developerPersona ? 'Red' : 'Green'}
                            onClick={() => setPersonaCookie('developer')}
                        />
                    </div>
                </section>
            </PageMarginWrapper>
            <PageMarginWrapper>
                <section className='py-10'>
                    <h1>A/B Testing content powered by Butter</h1>
                    <div>
                        You are currently using{' '}
                        {!isClient || (!versionA && !versionB) ? (
                            <b>no</b>
                        ) : (
                            <>
                                {versionA && <b>Version A</b>}
                                {versionB && <b>Version B</b>}
                            </>
                        )}{' '}
                        on your homepage.
                    </div>
                </section>
                <section className='py-10'>
                    <h2>A/B testing toggle buttons</h2>
                    <div className='space-y-5 max-w-fit'>
                        <OnClickButton
                            buttonText={`${versionA ? 'Disable' : 'Enable'} Version A homepage`}
                            color={versionA ? 'Red' : 'Green'}
                            onClick={() => setABTestingCookie('true')}
                        />
                        <OnClickButton
                            buttonText={`${versionB ? 'Disable' : 'Enable'} Version B homepage`}
                            color={versionB ? 'Red' : 'Green'}
                            onClick={() => setABTestingCookie('true')}
                        />
                    </div>
                </section>
            </PageMarginWrapper>
        </section>
    )
}

export default PersonalizePage