/**
 * vivian-lenormand-ds — Mantine Theme Override
 * Usar em: apps/admin/components/admin/AdminThemeProvider.tsx
 * Compatível com: Mantine UI v8
 */

import {
    ActionIcon,
    Badge,
    Button,
    Card,
    Container,
    createTheme,
    Input,
    Modal,
    NavLink,
    Paper,
    rem,
    Select,
    Textarea,
} from '@mantine/core';
import type { MantineThemeOverride } from '@mantine/core';

const CONTAINER_SIZES: Record<string, string> = {
    xxs: rem('200px'),
    xs:  rem('300px'),
    sm:  rem('400px'),
    md:  rem('500px'),
    lg:  rem('600px'),
    xl:  rem('1400px'),
    xxl: rem('1600px'),
};

export const vivianLenormandTheme: MantineThemeOverride = createTheme({
    fontFamily: 'var(--font-lora), serif',
    headings: {
        fontFamily: 'var(--font-playfair), serif',
        fontWeight: '700',
    },
    fontSizes: {
        xs:   rem('12px'),
        sm:   rem('14px'),
        md:   rem('16px'),
        lg:   rem('18px'),
        xl:   rem('20px'),
        '2xl': rem('24px'),
        '3xl': rem('30px'),
        '4xl': rem('36px'),
        '5xl': rem('48px'),
    },
    spacing: {
        '3xs': rem('4px'),
        '2xs': rem('8px'),
        xs:    rem('10px'),
        sm:    rem('12px'),
        md:    rem('16px'),
        lg:    rem('20px'),
        xl:    rem('24px'),
        '2xl': rem('28px'),
        '3xl': rem('32px'),
    },
    primaryColor: 'vivian-lenormand',
    primaryShade: { light: 6, dark: 8 },
    defaultRadius: 'md',
    colors: {
        'vivian-lenormand': [
            '#F6EEEC',
            '#E7D7D2',
            '#D8BFB6',
            '#C7A49A',
            '#B68A7F',
            '#A16E64',
            '#8D5C54',
            '#6D4742',
            '#573734',
            '#432927',
        ],
        dark: [
            '#E2D9D4',
            '#D1C2BC',
            '#B7A59F',
            '#9D8A84',
            '#84716B',
            '#3A302E',
            '#2D2423',
            '#221A19',
            '#171111',
            '#0F0C0D',
        ],
    },
    components: {
        Container: Container.extend({
            vars: (_, { size, fluid }) => ({
                root: {
                    '--container-size': fluid
                        ? '100%'
                        : size !== undefined && size in CONTAINER_SIZES
                            ? CONTAINER_SIZES[size]
                            : rem(size),
                },
            }),
        }),
        Input: Input.extend({
            defaultProps: { radius: 'md' },
            styles: {
                input: {
                    backgroundColor: 'var(--vl-admin-control-bg)',
                    borderColor:     'var(--vl-admin-border)',
                    color:           'var(--vl-admin-text)',
                },
            },
        }),
        Textarea: Textarea.extend({
            defaultProps: { radius: 'md' },
        }),
        Paper: Paper.extend({
            defaultProps: { p: 'md', shadow: 'xl', radius: 'md', withBorder: true },
            styles: {
                root: {
                    background:  'var(--vl-admin-surface)',
                    borderColor: 'var(--vl-admin-border)',
                    boxShadow:   'var(--vl-admin-shadow)',
                },
            },
        }),
        Card: Card.extend({
            defaultProps: { p: 'xl', shadow: 'xl', radius: 'var(--mantine-radius-default)', withBorder: true },
            styles: {
                root: {
                    background:  'var(--vl-admin-surface)',
                    borderColor: 'var(--vl-admin-border)',
                    boxShadow:   'var(--vl-admin-shadow)',
                },
            },
        }),
        Select: Select.extend({
            defaultProps: { checkIconPosition: 'right' },
        }),
        Button: Button.extend({
            defaultProps: { radius: 'md' },
            styles: {
                root: { border: 'none', boxShadow: 'none' },
            },
        }),
        Badge: Badge.extend({
            defaultProps: { radius: 'sm' },
        }),
        ActionIcon: ActionIcon.extend({
            defaultProps: { radius: 'md' },
            styles: {
                root: { border: 'none', boxShadow: 'none' },
            },
        }),
        NavLink: NavLink.extend({
            defaultProps: { color: 'vivian-lenormand' },
            styles: {
                root: { border: 'none' },
            },
        }),
        Modal: Modal.extend({
            defaultProps: {
                centered: true,
                radius: 'md',
                overlayProps: { blur: 8, backgroundOpacity: 0.7 },
            },
            styles: {
                content: {
                    background:  'var(--vl-admin-surface)',
                    border:      '1px solid var(--vl-admin-border)',
                    boxShadow:   'var(--vl-admin-shadow)',
                },
                body: {
                    padding: 'var(--mantine-spacing-xl)',
                },
            },
        }),
    },
});
