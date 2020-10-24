export default {
  actions: {},
  mutations: {},
  state: {
    works: [
      {
        name: 'Residential Complex «First Line»',
        location: 'Tyumen (Russia)',
        acreage: '52 000',
        position: 'Lead Architect',
        activity: 'sketch stage, Revit',
        images: require.context(
          '@/assets/img/portfolio/first_line/',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/first_line/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/first_line/placeholder.jpg'),
      },
      {
        name: 'Residential Complex «My Rhythm»',
        location: 'Kazan (Russia)',
        acreage: '35 000',
        position: 'Lead Architect',
        activity:
          'design development, construction documentation, Revit (LOD400)',
        images: require.context(
          '@/assets/img/portfolio/my_rhythm/',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/my_rhythm/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/my_rhythm/placeholder.jpg'),
      },
      {
        name: 'Mosfilm, Warehouse',
        location: 'Moscow (Russia)',
        acreage: '20 000',
        position: 'Lead Architect',
        activity: 'construction documentation, Revit',
        images: require.context(
          '@/assets/img/portfolio/mosfilm_warehouse/',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/mosfilm_warehouse/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/mosfilm_warehouse/placeholder.jpg'),
      },
      {
        name: 'Mosfilm, Film Studio',
        location: 'Moscow (Russia)',
        acreage: '20 000',
        position: 'Lead Architect',
        activity: 'construction documentation, Revit',
        images: require.context(
          '@/assets/img/portfolio/mosfilm_studio/',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/mosfilm_studio/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/mosfilm_studio/placeholder.jpg'),
      },
      {
        name: 'Mockup for Residential Complex Cherry Orchard',
        location: 'Moscow (Russia)',
        position: 'Lead Architect',
        activity: 'sketch stage, construction documentation, Revit',
        images: require.context(
          '@/assets/img/portfolio/cherry_orchard/',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/cherry_orchard/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/cherry_orchard/placeholder.jpg'),
      },
      {
        name: 'Residential Complex «Basmanny»',
        location: 'Moscow (Russia)',
        acreage: '35 000',
        position: 'Lead Architect',
        activity: 'construction documentation, Revit',
        images: require.context(
          '@/assets/img/portfolio/basmanny/',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/basmanny/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/basmanny/placeholder.jpg'),
      },
      {
        name: "Residential Complex «I'M Tverskaya»",
        location: 'Moscow (Russia)',
        acreage: '26 635',
        position: 'Lead Architect',
        activity: 'design development, AutoCAD',
        images: require.context(
          '@/assets/img/portfolio/im_tverskaya/',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/im_tverskaya/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/im_tverskaya/placeholder.jpg'),
      },
      {
        name: 'Sheremetyevo Cargo',
        location: 'Khimki (Russia)',
        acreage: '42 300',
        position: 'Architect',
        activity: 'construction documentation, Revit, AutoCAD',
        images: require.context(
          '@/assets/img/portfolio/sheremetyevo/',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/sheremetyevo/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/sheremetyevo/placeholder.jpg'),
      },
      {
        name: 'Business complex «Pilyugina»',
        location: 'Moscow (Russia)',
        acreage: '43 500',
        position: 'Architect',
        activity: 'construction documentation, AutoCAD',
        images: require.context(
          '@/assets/img/portfolio/pilyugina/',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/pilyugina/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/pilyugina/placeholder.jpg'),
      },
      {
        name: 'Houses',
        position: 'Architect',
        activity: 'sketch stage, ArchiCAD',
        images: require.context(
          '@/assets/img/portfolio/houses/houses',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/houses/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/houses/placeholder.jpg'),
      },
      {
        name: 'House',
        position: 'Architect',
        activity: 'design development, ArchiCAD',
        images: require.context(
          '@/assets/img/portfolio/houses/house_crimea',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/house_crimea/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/house_crimea/placeholder.jpg'),
      },
      {
        name: 'House',
        position: 'Architect',
        activity: 'sketch stage, ArchiCAD',
        images: require.context(
          '@/assets/img/portfolio/houses/house_fashevka',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/house_fashevka/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/house_fashevka/placeholder.jpg'),
      },
      {
        name: 'House',
        position: 'Architect',
        activity: 'design development, ArchiCAD',
        images: require.context(
          '@/assets/img/portfolio/houses/house_yalta',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/house_yalta/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/house_yalta/placeholder.jpg'),
      },
      {
        name: 'House',
        position: 'Architect',
        activity: 'design development, ArchiCAD',
        images: require.context(
          '@/assets/img/portfolio/houses/house_potoshovo',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/house_potoshovo/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/house_potoshovo/placeholder.jpg'),
      },
      {
        name: 'House',
        position: 'Architect',
        activity: 'sketch stage, ArchiCAD',
        images: require.context(
          '@/assets/img/portfolio/houses/house_terem',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/house_terem/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/house_terem/placeholder.jpg'),
      },
      {
        name: 'House',
        position: 'Architect',
        activity: 'sketch stage, ArchiCAD',
        images: require.context(
          '@/assets/img/portfolio/houses/house_villa',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/house_villa/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/house_villa/placeholder.jpg'),
      },
      {
        name: 'Hotel «Lipetsk». Reconstruction',
        studentWork: 'ArchiCAD, Artlantis',
        images: require.context(
          '@/assets/img/portfolio/hotel_lipetsk/',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/hotel_lipetsk/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/hotel_lipetsk/placeholder.jpg'),
      },
      {
        name: 'Hotel «LOGOS»',
        studentWork: 'ArchiCAD, Artlantis',
        images: require.context(
          '@/assets/img/portfolio/hotel_logos/',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/hotel_logos/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/hotel_logos/placeholder.jpg'),
      },
      {
        name: 'Manufacturing building',
        studentWork: 'ArchiCAD, Artlantis',
        images: require.context(
          '@/assets/img/portfolio/manufacturing_building/',
          true,
          /\.jpg$/
        ),
        preview: require('@/assets/img/portfolio/previews/manufacturing_building/preview.jpg'),
        placeholder: require('@/assets/img/portfolio/previews/manufacturing_building/placeholder.jpg'),
      },
    ],
  },
  getters: {
    portfolio: function(state) {
      return state.works
    },
  },
}
